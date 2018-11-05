package com.gwenrspl.twitchtags.service;

import com.gwenrspl.twitchtags.model.User;
import com.gwenrspl.twitchtags.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserServiceImpl implements UserService {

    private final UserRepository repository;

    public UserServiceImpl(final UserRepository repository) {
        this.repository = repository;
    }

    @Override
    public Iterable<User> listAll() {
        return this.repository.findAll();
    }

    @Override
    public Optional<User> getOne(final Long id) {
        return this.repository.findById(id);
    }

    @Override
    public Optional<User> getOneByUsername(String username) {
        return this.repository.findByUsername(username);
    }

    @Override
    public Boolean existsByUsername(String username) {
        return this.repository.existsByUsername(username);
    }

    @Override
    public Boolean existsByEmail(String email) {
        return this.repository.existsByEmail(email);
    }

    @Override
    public User create(final User user) {
        return this.repository.save(user);
    }

    @Override
    public User update(final Long id, final User user) {
        final Optional<User> optUser = this.repository.findById(id);
        if (!optUser.isPresent()) return null;
        if (user.getUsername() == null) user.setUsername(optUser.get().getUsername());
        if (user.getEmail() == null) user.setEmail(optUser.get().getEmail());
        if (user.getPassword() == null) user.setPassword(optUser.get().getPassword());
        if (user.getChannelTagUserLinks() == null) user.setChannelTagUserLinks(optUser.get().getChannelTagUserLinks());
        if (user.getRole() == null) user.setRole(optUser.get().getRole());
        user.setId(id);
        this.repository.save(user);
        return user;
    }

    @Override
    public void delete(final Long id) {
        this.repository.deleteById(id);
    }
}
