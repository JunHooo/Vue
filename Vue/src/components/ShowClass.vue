


<template>
  <div>
    <!--表格-->
    <el-table
      :data="timeData"
      stripe
      style="width: 100%">
      <el-table-column width="80" label="周" fixed="left" prop="label" align="center"></el-table-column>

      <el-table-column label="上午" align="center">
        <el-table-column
          width="160"
          v-for="(v,i) in titleData" :key="i"
          v-if="v.label==='上午'" align="center">
          <template slot="header" slot-scope="scope">
            <div class="tabletitle-timeline">
              第{{v.count}}节 <br/>
              {{v.startTime}}-{{v.endTime}}
            </div>
          </template>
          <template slot-scope="scope">
            <div v-if="timeShow">
              {{scope.row[subjectKey[i]]}}<br/>
              {{scope.row[teacherKey[i]]}}<br/>
              {{scope.row[roomKey[i]]}}
            </div>
          </template>
        </el-table-column>
      </el-table-column>

      <el-table-column label="下午" align="center">
        <el-table-column
          width="160"
          v-for="(v,i) in titleData" :key="i"
          v-if="v.label==='下午'" align="center">
          <template slot="header" slot-scope="scope">
            <div class="tabletitle-timeline">
              第{{v.count}}节 <br/>
              {{v.startTime}}-{{v.endTime}}
            </div>
          </template>
          <template slot-scope="scope">
            <div >
              <div v-if="timeShow">
                {{scope.row[subjectKey[i]]}}<br/>
                {{scope.row[teacherKey[i]]}}<br/>
                {{scope.row[roomKey[i]]}}
              </div>
            </div>
          </template>
        </el-table-column>
      </el-table-column>

      <el-table-column label="晚上" align="center">
        <el-table-column
          width="160"
          v-for="(v,i) in titleData" :key="i"
          v-if="v.label==='晚上'"
          align="center">
          <template slot="header" slot-scope="scope">
            <div class="tabletitle-timeline">
              第{{v.count}}节 <br/>
              {{v.startTime}}-{{v.endTime}}
            </div>
          </template>
          <template slot-scope="scope">
            <div >
              <div v-if="timeShow" >
                {{scope.row[subjectKey[i]]}}<br/>
                {{scope.row[teacherKey[i]]}}<br/>
                {{scope.row[roomKey[i]]}}
              </div>
            </div>
          </template>
        </el-table-column>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
// import {requestServices} from '../../api/api';
// import {auth} from '../../lib/auth';

export default {
  data() {
    return {
      pageButton:{},//权限按钮
      //查询
      gradeUnitData:[],//年级班级数据
      defaultProps: {value:'id'},//默认节点名与数据绑定
      timeShow:true,//编辑表与展示表
      teachers:[],//全部教师

      subjectKey:['oneS','twoS','threeS','fourS','fiveS','sixS','sevenS','eightS','nineS'],//科目key值
      teacherKey:['oneT','twoT','threeT','fourT','fiveT','sixT','sevenT','eightT','nineT'],//老师key值
      roomKey:['oneC','twoC','threeC','fourC','fiveC','sixC','sevenC','eightC','nineC'],//教室
      //每天的课表
      timeData:[
        {
          id:'1',
          label:'周一',
          oneS:'高等数学',
          oneT:'郑阳春',
          oneC:'七教201',
          twoS:'C语言',
          twoT:'李正东',
          twoC:'七教208',
          fourS:'大学语文',
          fourT:'杨华文',
          fourC:'一教106',

        },
        {
          id:'2',
          label:'周二',
          oneS:'Java',
          oneT:'黄兴宇',
          oneC:'七教201',
          twoS:'大数据',
          twoT:'邹进',
          twoC:'七教206',
          threeS:'互联网+',
          threeT:'董宇超',
          threeC:'七教208',
          fiveS:'创新创业',
          fiveT:'何江',
          fiveC:'一教101',


        },
        {
          id:'3',
          label:'周三',
          oneS:'Java',
          oneT:'黄兴宇',
          oneC:'七教201',
          twoS:'数据结构',
          twoT:'杨富强',
          twoC:'七教206',
          fourS:'大学体育',
          fourT:'何杰',
          fourC:'蓝色海洋',


        },
        {
          id:'4',
          label:'周四',

          twoS:'大学英语',
          twoT:'王蕾',
          twoC:'三教208',
          threeS:'高等数学',
          threeT:'郑阳春',
          threeC:'七教206',
          fourS:'C语言',
          fourT:'李正东',
          fourC:'七教208',


        },
        {
          id:'5',
          label:'周五',
          oneS:'互联网+',
          oneT:'李雪楠',
          oneC:'七教201',
          twoS:'数据结构',
          twoT:'王冬冬',
          twoC:'七教201',


        },
        {
          id:'',
          label:'周六',
          twoS:'物理实验',
          twoT:'王生明',
          twoC:'六教201',
        },
        {
          id:'',
          label:'周日',
        },
      ],
      belongName:'',//班级名
      belongId:"",//班级id
      belongType:"803",//803表示班级，教室804
      timeId:"",
      //课节数据---标题
      titleData:[
        {
          id:'1',
          count:1,
          label:'上午',
          startTime:'08:00',
          endTime:'09:50'
        },
        {
          id:'2',
          count:2,
          label:'上午',
          startTime:'10:00',
          endTime:'11:50'
        },
        {
          id:'3',
          count:3,
          label:'下午',
          startTime:'14:00',
          endTime:'15:50'
        },
        {
          id:'4',
          count:4,
          label:'下午',
          startTime:'16:00',
          endTime:'17:50'
        },

        {
          id:'8',
          count:8,
          label:'晚上',
          startTime:'19:00',
          endTime:'20:30'
        },
        {
          id:'9',
          count:9,
          label:'晚上',
          startTime:'20:40',
          endTime:'21:30'
        },
      ],
    }
  },
  mounted(){
  },
  methods:{
  },
}
</script>
<style>
.tabletitle-timeline{
  line-height: 18px!important;
}
</style>
