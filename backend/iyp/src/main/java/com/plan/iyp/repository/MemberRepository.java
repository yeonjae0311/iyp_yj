package com.plan.iyp.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.plan.iyp.entity.Member;

public interface MemberRepository extends JpaRepository<Member, Long> {

    Optional<Member> findByEmail(String email);


}