
package com.gwenrspl.twitchtags.converter;

import com.fasterxml.jackson.databind.util.StdConverter;
import com.gwenrspl.twitchtags.model.User;

public class UserConverter extends StdConverter<User, UserConverter.UserSummary> {
    @Override
    public UserSummary convert(final User user) {
        final UserSummary summary = new UserSummary();
        summary.setId(user.getId());
        summary.setUsername(user.getUsername());
        return summary;
    }

    public class UserSummary {
        private Long id;
        private String username;

        public UserSummary() {
        }

        public Long getId() {
            return this.id;
        }

        public void setId(final Long id) {
            this.id = id;
        }

        public String getUsername() {
            return this.username;
        }

        public void setUsername(final String username) {
            this.username = username;
        }
    }
}
