package com.plan.iyp.security.jwt;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.plan.iyp.common.exception.ResourceNotFoundException;
import com.plan.iyp.repository.MemberRepository;

@Service
public class CustomUserDetailsService implements UserDetailsService{
	
	@Autowired
    private MemberRepository memberRepo;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        return this.memberRepo.findById(username).orElseThrow(
                () -> new ResourceNotFoundException("Member", "Member Id : ", username));
    }
}
