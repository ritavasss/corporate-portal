package com.dfs.corporate_portal.controller;

import com.dfs.corporate_portal.repository.MyUser;
import com.dfs.corporate_portal.repository.UserRepository;
import com.dfs.corporate_portal.security.JwtUtil;
import jakarta.validation.Valid;
import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.*;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    private AuthenticationManager authManager;

    @Autowired
    private JwtUtil jwtUtil;

    @Autowired
    private UserRepository userRepo;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody @Valid LoginRequest request) {
        try {
            // Аутентификация пользователя
            Authentication authentication = authManager.authenticate(
                    new UsernamePasswordAuthenticationToken(request.getUsername(), request.getPassword())
            );

            // Устанавливаем аутентификацию в контексте безопасности
            SecurityContextHolder.getContext().setAuthentication(authentication);

            // Генерируем токен и возвращаем его
            String jwt = jwtUtil.generateToken(request.getUsername());
            return ResponseEntity.ok(jwt); // HTTP 200 OK

        } catch (BadCredentialsException e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials");
        }
    }

    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody @Valid LoginRequest request) {
        // Проверка на существование пользователя
        if (userRepo.findByName(request.getUsername()).isPresent()) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("User already exists");
        }

        MyUser user = new MyUser();
        user.setName(request.getUsername());
        user.setPassword(passwordEncoder.encode(request.getPassword()));
        user.setRoles("ROLE_USER");

        userRepo.save(user);

        // Генерация токена для нового пользователя
        String jwt = jwtUtil.generateToken(request.getUsername());
        return ResponseEntity.status(HttpStatus.CREATED).body(jwt); // HTTP 201 Created
    }

    @Data
    public static class LoginRequest {
        private String username;
        private String password;
    }
}
