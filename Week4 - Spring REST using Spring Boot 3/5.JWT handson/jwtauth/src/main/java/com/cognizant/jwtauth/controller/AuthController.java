package com.cognizant.jwtauth.controller;

import com.cognizant.jwtauth.util.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;

import java.util.Base64;
import java.util.Collections;

@RestController
public class AuthController {

    @Autowired
    private JwtUtil jwtUtil;

    @GetMapping("/authenticate-browser")
    public ResponseEntity<?> authenticateBrowser(@RequestParam String username, @RequestParam String password) {
    if ("user".equals(username) && "pwd".equals(password)) {
        String token = jwtUtil.generateToken(username);
        return ResponseEntity.ok(Collections.singletonMap("token", token));
    } else {
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials");
    }
}

    @GetMapping("/authenticate")
    public ResponseEntity<?> authenticate(@RequestHeader("Authorization") String authHeader) {
        try {
            System.out.println("Authorization Header: " + authHeader); // Debug line

            String base64Credentials = authHeader.substring("Basic ".length());
            byte[] decodedBytes = Base64.getDecoder().decode(base64Credentials);
            String decodedCredentials = new String(decodedBytes);

            String[] tokens = decodedCredentials.split(":");
            String username = tokens[0];
            String password = tokens[1];

            if ("user".equals(username) && "pwd".equals(password)) {
                String token = jwtUtil.generateToken(username);
                return ResponseEntity.ok(Collections.singletonMap("token", token));
            } else {
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials");
            }
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Invalid Authorization header");
        }
    }
}