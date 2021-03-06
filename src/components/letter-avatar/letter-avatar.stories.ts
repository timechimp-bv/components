import { storiesOf } from "@storybook/vue";

import TcLetterAvatar from "./letter-avatar.vue";

storiesOf("Letter Avatar", module).add("Default", () => ({
  components: {
    TcLetterAvatar
  },
  template: `
            <tc-letter-avatar name="Baltus" />
        `
}));
