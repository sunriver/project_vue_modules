

<script>
const ViewItemType = {
  TYPE_BUTTON: 1,
  TYPE_TEXT: 2,
  TYPE_IMAGE: 3
};
import CpButton from "../components/CpButton";
import CpText from "../components/CpText";
import CpImage from "../components/CpImage";

export default {
  data() {
    return {
      dataItems: [
        {
          type: ViewItemType.TYPE_IMAGE,
          name: "image1"
        },
        {
          type: ViewItemType.TYPE_TEXT,
          name: "text1"
        },
        {
          type: ViewItemType.TYPE_TEXT,
          name: "text2"
        },
        {
          type: ViewItemType.TYPE_BUTTON,
          name: "button1"
        }
      ]
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
    createViewAndBindData: function(createElement, CpElement, subData) {
    //   console.log(createElement);
       console.log(CpElement);
    //    console.log(subData);
      let subView = createElement(CpElement, {
        props: {
          data: subData
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
        let dataItem = this.dataItems[i];
          console.log("for ..." + dataItem);
          switch (dataItem.type) {
            case ViewItemType.TYPE_BUTTON:
              subView = this.createViewAndBindData(
                createElement,
                CpButton,
                dataItem
              );
              break;
            case ViewItemType.TYPE_TEXT:
              subView = this.createViewAndBindData(
                createElement,
                CpText,
                dataItem
              );
              break;
            case ViewItemType.TYPE_IMAGE:
              subView = this.createViewAndBindData(
                createElement,
                CpImage,
                dataItem
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