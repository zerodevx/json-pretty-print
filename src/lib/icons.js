import Icon, { addIcon } from '@iconify/svelte/dist/OfflineIcon.svelte'
import github from '@iconify-icons/mdi/github'
import close from '@iconify-icons/mdi/window-close'
import light_on from '@iconify-icons/mdi/light-switch-on'
import light_off from '@iconify-icons/mdi/light-switch-off'
import collapse from '@iconify-icons/mdi/collapse-all'
import expand from '@iconify-icons/mdi/expand-all'
import indent from '@iconify-icons/mdi/format-indent-increase'
import size from '@iconify-icons/mdi/format-size'
import copy from '@iconify-icons/mdi/content-copy'
import share from '@iconify-icons/mdi/share'

addIcon('github', github)
addIcon('close', close)
addIcon('light_on', light_on)
addIcon('light_off', light_off)
addIcon('collapse', collapse)
addIcon('expand', expand)
addIcon('indent', indent)
addIcon('size', size)
addIcon('copy', copy)
addIcon('share', share)

export { Icon as default }
