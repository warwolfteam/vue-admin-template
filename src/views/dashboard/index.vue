<template>
  <div>
    <Row :gutter="20">
      <i-col :xs="12" :md="8" :lg="4" v-for="(infor, i) in inforCardData" :key="`infor-${i}`" style="height: 120px;padding-bottom: 10px;width: 33%;">
        <infor-card shadow :color="infor.color" :icon="infor.icon" :icon-size="36">
          <count-to :end="infor.count" count-class="count-style"/>
          <p>{{ infor.title }}</p>
        </infor-card>
      </i-col>
    </Row>
    <Row>
      <Card shadow>
        <example style="height: 550px"/>
      </Card>
    </Row>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import InforCard from '@/components/info-card'
import CountTo from '@/components/count-to'
import Example from './example.vue'
export default {
  name: 'Dashboard',
  components: {
    InforCard,
    CountTo,
    Example
  },
  data () {
    return {
      inforCardData: [
        { title: '当月交易金额', icon: 'md-person-add', count: 3803, color: '#2d8cf0' },
        { title: '今日交易金额', icon: 'md-locate', count: 232, color: '#19be6b' },
        { title: '今日新增用户', icon: 'md-help-circle', count: 142, color: '#ff9900' },
        { title: '当月佣金', icon: 'md-share', count: 4657, color: '#ed3f14' },
        { title: '今日佣金', icon: 'md-chatbubbles', count: 1299, color: '#E46CBB' },
        { title: '用户总数', icon: 'md-map', count: 1499, color: '#9A66E4' }
      ]
    }
  },
  mounted () {
  }
}
</script>

<style lang="scss" scoped>
.count-style{
  font-size: 50px;
}

</style>
