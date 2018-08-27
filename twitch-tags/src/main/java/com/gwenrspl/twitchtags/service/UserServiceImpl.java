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
    public User create(final User user) {
        return this.repository.save(user);
    }

    @Override
    public User update(final Long id, final User user) {
        final Optional<User> optUser = this.repository.findById(id);
        if (!optUser.isPresent()) return null;
        user.setId(id);
        return user;
    }

    @Override
    public void delete(final Long id) {
        this.repository.deleteById(id);
    }
}
