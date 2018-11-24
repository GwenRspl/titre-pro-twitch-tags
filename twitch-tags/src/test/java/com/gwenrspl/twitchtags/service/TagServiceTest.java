package com.gwenrspl.twitchtags.service;

import com.gwenrspl.twitchtags.controller.TagController;
import com.gwenrspl.twitchtags.model.Tag;
import com.gwenrspl.twitchtags.repository.TagRepository;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;

import java.util.ArrayList;
import java.util.List;

import static org.junit.Assert.*;
import static org.mockito.Mockito.when;

@SpringBootTest
@RunWith(SpringRunner.class)
public class TagServiceTest {

    MockMvc mockMvc;

    @Autowired
    protected WebApplicationContext context;

    @Autowired
    TagService tagService;

    @MockBean
    TagRepository tagRepository;

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
    public void listAll() {
        when(tagRepository.findAll()).thenReturn(tags);

        List<Tag> resultTags = this.tagService.listAll();
        assertNotEquals(resultTags, null);
        assertEquals(resultTags,tags);

    }

    @Test
    public void searchByName() {
        when(tagRepository.findAll()).thenReturn(tags);
        List<Tag> expected = new ArrayList<>();
        expected.add(Tag.builder().name("humor").build());

        List<Tag> resultTags = this.tagService.searchByName("hu");
        assertNotEquals(resultTags, null);
        assertEquals(resultTags,expected);
    }

    @Test
    public void searchByNameStrict() {
        when(tagRepository.findAll()).thenReturn(tags);
        Tag expectedTag = Tag.builder().name("positivity").build();

        Tag resultTag = this.tagService.searchByNameStrict("positivity");
        assertNotEquals(resultTag, null);
        assertNotEquals(resultTag, "");
        assertEquals(resultTag,expectedTag);
    }

    @Test
    public void getOne() {
        when(tagRepository.findById(1L)).thenReturn(java.util.Optional.ofNullable(tags.get(0)));
        Tag expectedTag = Tag.builder().name("humor").build();

        Tag resultTag = this.tagService.getOne(1L);
        assertNotEquals(resultTag, null);
        assertNotEquals(resultTag, "");
        assertEquals(resultTag,expectedTag);
    }

    @Test
    public void update() {
        Tag newTag = Tag.builder().name("chill").build();
        when(tagRepository.findById(1L)).thenReturn(java.util.Optional.ofNullable(tags.get(0)));
        when(tagRepository.save(newTag)).thenReturn(null);

        Tag resultTag = this.tagService.update(1L,newTag);
        assertNotEquals(resultTag, null);
        assertNotEquals(resultTag.getId(), null);
        assertNotEquals(resultTag, "");
        assertEquals(resultTag,newTag);

    }

}