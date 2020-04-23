<script>
import CpButton from "../components/CpButton";
import CpText from "../components/CpText";
import CpImage from "../components/CpImage";
import { ItemVo, ViewItemType } from "../models/ItemData";

const componetsConfig = {};
componetsConfig[ViewItemType.TYPE_IMAGE] = CpImage;
componetsConfig[ViewItemType.TYPE_TEXT] = CpText;
componetsConfig[ViewItemType.TYPE_BUTTON] = CpButton;

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
    };
  },
  computed: {},
  created() {},
  render: function(createElement) {
    console.log("render...");
    return createElement("div", {}, this.createChildViews(createElement));
  },
  methods: {
    createChildViews: function(createElement) {
      let children = [];
      if (!this.dataItems) {
        return children;
      }
      for (let i = 0; i < this.dataItems.length; i++) {
        let itemVo = this.dataItems[i];
        const configCp = componetsConfig[itemVo.type];
        console.log("configCp" + configCp)
        if (!configCp) {
          continue;
        }
        let subView = createElement(configCp, {
          props: {
            data: itemVo
          }
        });
        if (subView) {
          children.push(subView);
        }
      }
      return children;
    }
  }
};
</script>

<style scoped>
</style>