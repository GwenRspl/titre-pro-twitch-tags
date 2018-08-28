package com.gwenrspl.twitchtags.converter;

import com.fasterxml.jackson.databind.util.StdConverter;
import com.gwenrspl.twitchtags.model.Tag;

public class TagConverter extends StdConverter<Tag, TagConverter.TagSummary> {
    @Override
    public TagSummary convert(final Tag tag) {
        final TagSummary summary = new TagSummary();
        summary.setId(tag.getId());
        summary.setName(tag.getName());
        return summary;
    }

    public class TagSummary {
        private Long id;
        private String name;

        public TagSummary() {
        }

        public Long getId() {
            return this.id;
        }

        public void setId(final Long id) {
            this.id = id;
        }

        public String getName() {
            return this.name;
        }

        public void setName(final String name) {
            this.name = name;
        }
    }
}
