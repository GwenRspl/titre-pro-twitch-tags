package com.gwenrspl.twitchtags.controller;

import com.gwenrspl.twitchtags.model.Tag;
import com.gwenrspl.twitchtags.service.TagService;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;

import java.util.ArrayList;
import java.util.List;

import static org.junit.Assert.*;
import static org.hamcrest.Matchers.is;
import static org.mockito.Mockito.doNothing;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.put;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.delete;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;

@SpringBootTest
@RunWith(SpringRunner.class)
public class TagControllerTest {

    MockMvc mockMvc;

    @Autowired
    protected WebApplicationContext context;

    @Autowired
    TagController tagController;

    @MockBean
    TagService tagService;

    private List<Tag> tags;

    @Before
    public void setUp() throws Exception {
        this.mockMvc = MockMvcBuilders.webAppContextSetup(context).build();
        Tag tag1 = Tag.builder()
                .name("humor")
                .build();
        Tag tag2 = Tag.builder()
                .name("positivity")
                .build();

        tags = new ArrayList<>();
        tags.add(tag1);
        tags.add(tag2);
    }

    @Test
    public void listAll() throws Exception {
        when(tagService.listAll()).thenReturn(tags);

        mockMvc.perform(get("/api/tags").contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$[0].name", is("humor")))
                .andExpect(jsonPath("$[1].name", is("positivity")));
    }

    @Test
    public void getOne() throws Exception {
        when(tagService.getOne(1L)).thenReturn(tags.get(0));

        mockMvc.perform(get("/api/tags/1").contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(jsonPath("name", is("humor")));
    }

    @Test
    public void create() throws Exception{
        Tag tag3 = Tag.builder()
                .name("chill")
                .build();
        when(tagService.create(tag3)).thenReturn(null);

        mockMvc.perform(post("/api/tags/create").contentType(MediaType.APPLICATION_JSON).content("{\"name\": \"chill\"}"))
                .andExpect(status().isOk());
    }

    @Test
    public void update() throws Exception{
        Tag tag3 = Tag.builder()
                .name("chill")
                .build();
        when(tagService.update(1L,tag3)).thenReturn(null);

        mockMvc.perform(put("/api/tags/1").contentType(MediaType.APPLICATION_JSON).content("{\"name\": \"chill\"}"))
                .andExpect(status().isOk());
    }

    @Test
    public void deleteTest() throws Exception{
        doNothing().when(tagService).delete(0L);

        mockMvc.perform(delete("/api/tags/1"))
                .andExpect(status().isOk());
    }

}