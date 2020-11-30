import { defineComponent } from '../../vue'
import { NAME_FORM_RADIO_GROUP } from '../../constants/components'
import { makePropsConfigurable } from '../../utils/config'
import formRadioCheckGroupMixin, {
  props as formRadioCheckGroupProps
} from '../../mixins/form-radio-check-group'

// --- Props ---

export const props = makePropsConfigurable(formRadioCheckGroupProps, NAME_FORM_RADIO_GROUP)

// --- Main component ---

// @vue/component
export const BFormRadioGroup = /*#__PURE__*/ defineComponent({
  name: NAME_FORM_RADIO_GROUP,
  mixins: [formRadioCheckGroupMixin],
  provide() {
    return {
      bvRadioGroup: this
    }
  },
  props,
  computed: {
    isRadioGroup() {
      return true
    }
  }
})
