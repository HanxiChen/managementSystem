package com.example.springboot.service;

import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.example.springboot.entity.Course;
import com.baomidou.mybatisplus.extension.service.IService;

/**
 * <p>
 *  服务类
 * </p>
 *
 * @author HANXICHEN
 * @since 2022-10-08
 */
public interface ICourseService extends IService<Course> {

    Page<Course> findPage(Page<Course> Page, String name);

    void setStudentCourse(Integer courseId, Integer studentId);
}
