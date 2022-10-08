package com.example.springboot.service;

import com.example.springboot.entity.Menu;
import com.baomidou.mybatisplus.extension.service.IService;

import java.util.List;

/**
 * <p>
 *  服务类
 * </p>
 *
 * @author HANXICHEN
 * @since 2022-10-06
 */
public interface IMenuService extends IService<Menu> {

    List<Menu> findMenus(String name);
}
