<template>
  <div>
    <b-card v-for="(msg, index) in messages" :key="index">
      <b-container>
        <b-row class="align-items-center justify-content-between">
          <b-col>
            <b-avatar
              :text="msg.subject.slice(0, 1)"
              :style="{
                'background-color': (msg.subject.includes('OFF') ? false : true)
                  ? 'orange'
                  : 'red',
              }"
            />
          </b-col>
          <b-col cols="8">
            <b-row class="d-flex flex-column">
              <b-col>
                <h2>{{ msg.subject }}</h2>
              </b-col>
              <b-col>
                <p>
                  {{
                    msg.length >= 20
                      ? `${msg.message.substring(0, 20).concat('...')}`
                      : msg.message
                  }}
                </p>
              </b-col>
            </b-row>
          </b-col>
          <b-col>
            <p class="text-muted">{{ msg.display }}</p>
            <b-icon-star v-if="msg.subject.includes('OFF') ? false : true" />
            <b-icon-star-fill v-else />
          </b-col>
        </b-row>
      </b-container>
    </b-card>
  </div>
</template>
<script>
import messages from '../data/messages.json';
import { BIconStar, BIconStarFill } from 'bootstrap-vue';

export default {
  computenents: {},
  data() {
    return {
      messages,
    };
  },
  components: { BIconStar, BIconStarFill },
};
</script>
<style></style>
