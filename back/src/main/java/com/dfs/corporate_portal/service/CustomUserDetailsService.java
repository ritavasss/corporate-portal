package com.dfs.corporate_portal.service;

import com.dfs.corporate_portal.repository.MyUser;
import com.dfs.corporate_portal.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.*;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CustomUserDetailsService implements UserDetailsService {

    @Autowired
    private UserRepository repository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        MyUser user = repository.findByName(username)
                .orElseThrow(() -> new UsernameNotFoundException("User not found"));

        return new User(
                user.getName(),
                user.getPassword(),
                List.of(new SimpleGrantedAuthority(user.getRoles()))
        );
    }
}
