package com.example.taskmanager.service;

import com.example.taskmanager.model.Task;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.stereotype.Service;
import jakarta.annotation.PostConstruct;
import java.io.File;
import java.util.*;

@Service
public class TaskService {
    private final File file = new File("tasks.json");
    private final ObjectMapper mapper = new ObjectMapper();
    private List<Task> tasks = new ArrayList<>();

    @PostConstruct
    public void init() {
        try {
            if (file.exists()) {
                tasks = mapper.readValue(file, new TypeReference<List<Task>>() {});
            }
        } catch (Exception e) {
            tasks = new ArrayList<>();
        }
    }

    private void save() {
        try {
            mapper.writeValue(file, tasks);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public List<Task> getAll() { return tasks; }

    public Task add(Task task) {
        int id = tasks.isEmpty() ? 1 : tasks.get(tasks.size() - 1).getId() + 1;
        task.setId(id);
        tasks.add(task);
        save();
        return task;
    }

    public void delete(int id) {
        tasks.removeIf(t -> t.getId() == id);
        save();
    }

    public Task complete(int id) {
        for (Task t : tasks) {
            if (t.getId() == id) {
                t.setCompleted(true);
                break;
            }
        }
        save();
        return null;
    }
}
