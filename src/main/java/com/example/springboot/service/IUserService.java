package com.example.springboot.service;

import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.example.springboot.controller.dto.UserDTO;
import com.example.springboot.controller.dto.UserPasswordDTO;
import com.example.springboot.entity.User;
import com.baomidou.mybatisplus.extension.service.IService;

/**
 * <p>
 *  服务类
 * </p>
 *
 * @author HANXICHEN
 * @since 2022-10-03
 */
public interface IUserService extends IService<User> {
    UserDTO login(UserDTO userDTO);

    User register(UserDTO userDTO);

    Page<User> findPage(Page<User> page, String username, String email, String address);

    void updatePassword(UserPasswordDTO userPasswordDto);
}
