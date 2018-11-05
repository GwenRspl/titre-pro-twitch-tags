package com.gwenrspl.twitchtags.controller;

import com.gwenrspl.twitchtags.message.request.LoginForm;
import com.gwenrspl.twitchtags.message.request.SignupForm;
import com.gwenrspl.twitchtags.message.response.JwtResponse;
import com.gwenrspl.twitchtags.message.response.ResponseMessage;
import com.gwenrspl.twitchtags.model.User;
import com.gwenrspl.twitchtags.security.jwt.JwtProvider;
import com.gwenrspl.twitchtags.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/auth")
public class AuthenticationController {

    @Autowired
    AuthenticationManager authenticationManager;

    @Autowired
    UserService userService;

    @Autowired
    PasswordEncoder encoder;

    @Autowired
    JwtProvider jwtProvider;

    @PostMapping("/signin")
    public ResponseEntity<?> authenticateUser(@Valid @RequestBody LoginForm loginRequest) {
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPassword()));
        SecurityContextHolder.getContext().setAuthentication(authentication);
        String jwt = jwtProvider.generateJwtToken(authentication);
        UserDetails userDetails = (UserDetails) authentication.getPrincipal();
        return ResponseEntity.ok(new JwtResponse(jwt, userDetails.getUsername(), userDetails.getAuthorities()));
    }

    @PostMapping("/signup")
    public ResponseEntity<?> registerUser(@Valid @RequestBody SignupForm signupRequest) {
        if(userService.existsByUsername(signupRequest.getUsername())) {
            return new ResponseEntity<>(new ResponseMessage("Fail -> Username is already taken"), HttpStatus.BAD_REQUEST);
        }

        if(userService.existsByEmail(signupRequest.getEmail())) {
            return new ResponseEntity<>(new ResponseMessage("Fail -> Email is already taken"), HttpStatus.BAD_REQUEST);
        }

        User user = new User(signupRequest.getUsername(),signupRequest.getEmail(), encoder.encode(signupRequest.getPassword()));
        String strRole = signupRequest.getRole();
        User.UserRole role;
        switch (strRole) {
            case "admin":
                role = User.UserRole.ADMIN;
                break;
           default:
               role = User.UserRole.STANDARD_USER;
        }

        user.setRole(role);
        userService.create(user);

        return new ResponseEntity<>(new ResponseMessage("User registered successfully"), HttpStatus.OK);
    }

    @PostMapping("/update")
    public ResponseEntity<?> updatePassword(@Valid @RequestBody LoginForm updateForm) {
        //TODO
        return null;
    }
}