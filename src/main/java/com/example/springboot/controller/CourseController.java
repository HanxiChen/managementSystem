package com.example.springboot.controller;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.example.springboot.entity.User;
import com.example.springboot.service.IUserService;
import org.springframework.web.bind.annotation.*;
import com.example.springboot.common.Result;
import javax.annotation.Resource;
import java.util.List;

import com.example.springboot.service.ICourseService;
import com.example.springboot.entity.Course;

import org.springframework.web.bind.annotation.RestController;

/**
 * <p>
 *  前端控制器
 * </p>
 *
 * @author HANXICHEN
 * @since 2022-10-08
 */
@RestController
@RequestMapping("/course")
public class CourseController {

    @Resource
    private ICourseService courseService;

    @Resource
    private IUserService userService;

    //新增和修改
    @PostMapping
    public Result save(@RequestBody Course course) {
        courseService.saveOrUpdate(course);
        return Result.success();
    }

    @PostMapping("/studentCourse/{courseId}/{studentId}")
    public Result studentCourse(@PathVariable Integer courseId, @PathVariable Integer studentId) {
        courseService.setStudentCourse(courseId, studentId);
        return Result.success();
    }

    //删除
    @DeleteMapping("/{id}")
    public Result delete(@PathVariable Integer id) {
        courseService.removeById(id);
        return Result.success();
    }

    @PostMapping("/del/batch")
    public Result deleteBatch(@RequestBody List<Integer> ids) {
        courseService.removeByIds(ids);
        return Result.success();
    }

    //查询所有
    @GetMapping
    public Result findAll() {
        return Result.success(courseService.list());
    }

    //根据id查询
    @GetMapping("/{id}")
    public Result findOne(@PathVariable Integer id) {
        return Result.success(courseService.getById(id));
    }

    //分页查询
    @GetMapping("/page")
    public Result findPage(@RequestParam String name,
                           @RequestParam Integer pageNum,
                           @RequestParam Integer pageSize) {

//        QueryWrapper<Course> queryWrapper = new QueryWrapper<>();
//        queryWrapper.orderByDesc("id");
//        Page<Course> page = courseService.page(new Page<>(pageNum, pageSize), queryWrapper);
//        List<Course> records = page.getRecords();
//        for (Course record : records) {
//            User user = userService.getById(record.getTeacherId());
//            if (user != null) {
//                record.setTeacher(user.getNickname());
//            }
//        }

        Page<Course> page = courseService.findPage(new Page<>(pageNum, pageSize), name);
        return Result.success(page);
    }
}

