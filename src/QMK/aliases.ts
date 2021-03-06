import { keys, keycode } from "./keycodes";

export const keycodeAliases: { [k: string]: keycode } = {
    KC_LCTL: "KC_LCTRL",
    KC_RCTL: "KC_RCTRL",
    KC_LSFT: "KC_LSHIFT",
    KC_RSFT: "KC_RSHIFT",
    KC_ESC: "KC_ESCAPE",
    KC_BSPC: "KC_BSPACE",
    KC_ENT: "KC_ENTER",
    KC_DEL: "KC_DELETE",
    KC_DELT: "KC_DELETE",
    KC_INS: "KC_INSERT",
    KC_CAPS: "KC_CAPSLOCK",
    KC_CLCK: "KC_CAPSLOCK",
    KC_RGHT: "KC_RIGHT",
    KC_PGDN: "KC_PGDOWN",
    KC_PSCR: "KC_PSCREEN",
    KC_SLCK: "KC_SCROLLLOCK",
    KC_PAUS: "KC_PAUSE",
    KC_BRK: "KC_PAUSE",
    KC_NLCK: "KC_NUMLOCK",
    KC_SPC: "KC_SPACE",
    KC_MINS: "KC_MINUS",
    KC_EQL: "KC_EQUAL",
    KC_GRV: "KC_GRAVE",
    KC_RBRC: "KC_RBRACKET",
    KC_LBRC: "KC_LBRACKET",
    KC_COMM: "KC_COMMA",
    KC_BSLS: "KC_BSLASH",
    KC_SLSH: "KC_SLASH",
    KC_SCLN: "KC_SCOLON",
    KC_QUOT: "KC_QUOTE",
    KC_APP: "KC_APPLICATION",
    KC_NUHS: "KC_NONUS_HASH",
    KC_NUBS: "KC_NONUS_BSLASH",
    KC_LCAP: "KC_LOCKING_CAPS",
    KC_LNUM: "KC_LOCKING_NUM",
    KC_LSCR: "KC_LOCKING_SCROLL",
    KC_ERAS: "KC_ALT_ERASE",
    KC_CLR: "KC_CLEAR",
    /* Japanese specific */
    KC_ZKHK: "KC_GRAVE",
    KC_RO: "KC_INT1",
    KC_KANA: "KC_INT2",
    KC_JYEN: "KC_INT3",
    KC_HENK: "KC_INT4",
    KC_MHEN: "KC_INT5",
    /* Keypad */
    KC_P1: "KC_KP_1",
    KC_P2: "KC_KP_2",
    KC_P3: "KC_KP_3",
    KC_P4: "KC_KP_4",
    KC_P5: "KC_KP_5",
    KC_P6: "KC_KP_6",
    KC_P7: "KC_KP_7",
    KC_P8: "KC_KP_8",
    KC_P9: "KC_KP_9",
    KC_P0: "KC_KP_0",
    KC_PDOT: "KC_KP_DOT",
    KC_PCMM: "KC_KP_COMMA",
    KC_PSLS: "KC_KP_SLASH",
    KC_PAST: "KC_KP_ASTERISK",
    KC_PMNS: "KC_KP_MINUS",
    KC_PPLS: "KC_KP_PLUS",
    KC_PEQL: "KC_KP_EQUAL",
    KC_PENT: "KC_KP_ENTER",
    /* Mousekey */
    KC_MS_U: "KC_MS_UP",
    KC_MS_D: "KC_MS_DOWN",
    KC_MS_L: "KC_MS_LEFT",
    KC_MS_R: "KC_MS_RIGHT",
    KC_BTN1: "KC_MS_BTN1",
    KC_BTN2: "KC_MS_BTN2",
    KC_BTN3: "KC_MS_BTN3",
    KC_BTN4: "KC_MS_BTN4",
    KC_BTN5: "KC_MS_BTN5",
    KC_WH_U: "KC_MS_WH_UP",
    KC_WH_D: "KC_MS_WH_DOWN",
    KC_WH_L: "KC_MS_WH_LEFT",
    KC_WH_R: "KC_MS_WH_RIGHT",
    KC_ACL0: "KC_MS_ACCEL0",
    KC_ACL1: "KC_MS_ACCEL1",
    KC_ACL2: "KC_MS_ACCEL2",
    /* Sytem Control */
    KC_PWR: "KC_SYSTEM_POWER",
    KC_SLEP: "KC_SYSTEM_SLEEP",
    KC_WAKE: "KC_SYSTEM_WAKE",
    /* Consumer Page */
    KC_MUTE: "KC_AUDIO_MUTE",
    KC_VOLU: "KC_AUDIO_VOL_UP",
    KC_VOLD: "KC_AUDIO_VOL_DOWN",
    KC_MNXT: "KC_MEDIA_NEXT_TRACK",
    KC_MPRV: "KC_MEDIA_PREV_TRACK",
    KC_MFFD: "KC_MEDIA_FAST_FORWARD",
    KC_MRWD: "KC_MEDIA_REWIND",
    KC_MSTP: "KC_MEDIA_STOP",
    KC_MPLY: "KC_MEDIA_PLAY_PAUSE",
    KC_MSEL: "KC_MEDIA_SELECT",
    KC_EJCT: "KC_MEDIA_EJECT",
    KC_MAIL: "KC_MAIL",
    KC_CALC: "KC_CALCULATOR",
    KC_MYCM: "KC_MY_COMPUTER",
    KC_WSCH: "KC_WWW_SEARCH",
    KC_WHOM: "KC_WWW_HOME",
    KC_WBAK: "KC_WWW_BACK",
    KC_WFWD: "KC_WWW_FORWARD",
    KC_WSTP: "KC_WWW_STOP",
    KC_WREF: "KC_WWW_REFRESH",
    KC_WFAV: "KC_WWW_FAVORITES",
    /* Transparent */
    KC_TRANSPARENT: "KC_ROLL_OVER",
    KC_TRNS: "KC_ROLL_OVER",
    _______: "KC_ROLL_OVER",
};
