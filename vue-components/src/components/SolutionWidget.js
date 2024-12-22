import { inject } from "vue";
import { setupSolution } from "./solutions/solution";

export default {
  emits: ["actionTriggered", "valueUpdated"],
  props: {
    day: {
      type: Number,
      default: 0,
    },
    input: {
      type: String,
    },
  },
  setup() {
    const trame = inject("trame");
    trame.refs["solution"] = {
      init() {
        setupSolution(trame);
      },
    };
  },
  template: `
    <div>
        <pre id="solution">
          generate solution using JavaScript
          leveraging Vue and Trame APIs
        </pre>
    </div>
    `,
};
