

<script>
// const ViewItemType = {
//   TYPE_BUTTON: 1,
//   TYPE_TEXT: 2,
//   TYPE_IMAGE: 3
// };
import CpButton from "../components/CpButton";
import CpText from "../components/CpText";
import CpImage from "../components/CpImage";
import {ItemVo, ViewItemType} from "../models/ItemData"
 
export default {
  data() {
    return {
        dataItems: [
            new ItemVo("img1", ViewItemType.TYPE_IMAGE), 
            new ItemVo("img2", ViewItemType.TYPE_IMAGE),
            new ItemVo("txt1", ViewItemType.TYPE_TEXT),
            new ItemVo("txt2", ViewItemType.TYPE_TEXT),
            new ItemVo("btn1", ViewItemType.TYPE_BUTTON)
        ]
    //   dataItems: [
    //     {
    //       type: ViewItemType.TYPE_IMAGE,
    //       name: "image1"
    //     },
    //     {
    //       type: ViewItemType.TYPE_TEXT,
    //       name: "text1"
    //     },
    //     {
    //       type: ViewItemType.TYPE_TEXT,
    //       name: "text2"
    //     },
    //     {
    //       type: ViewItemType.TYPE_BUTTON,
    //       name: "button1"
    //     }
    //   ]
    };
  },
  computed: {},
  created() {},
  //jsx
  render: function(createElement) {
    console.log("render...");
    return createElement("div", {}, this.createSubViews(createElement));
  },
  methods: {
    createViewAndBindData: function(createElement, CpElement, itemVo) {
    //   console.log(createElement);
       console.log(CpElement);
    //    console.log(subData);
      let subView = createElement(CpElement, {
        props: {
          data: itemVo
        }
      });
      return subView;
    },
    createSubViews: function(createElement) {
      console.log("createSubViews..." + this.dataItems);
      let subViews = [];
      if (this.dataItems) {
        let subView = null;
        
        for (let i = 0; i < this.dataItems.length; i++) {
          // this.dataItems.forEach(dataItem => {
        let itemVo = this.dataItems[i];
          console.log("for ..." + itemVo);
          switch (itemVo.type) {
            case ViewItemType.TYPE_BUTTON:
              subView = this.createViewAndBindData(
                createElement,
                CpButton,
                itemVo
              );
              break;
            case ViewItemType.TYPE_TEXT:
              subView = this.createViewAndBindData(
                createElement,
                CpText,
                itemVo
              );
              break;
            case ViewItemType.TYPE_IMAGE:
              subView = this.createViewAndBindData(
                createElement,
                CpImage,
                itemVo
              );
              break;
            default:
          }
          if (subView) {
            subViews.push(subView);
          }
        }
      }
      return subViews;
    }
  }
};
</script>

<style scoped>
</style>