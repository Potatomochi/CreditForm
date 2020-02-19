data() {
    return {
        lastValue: '',
    }
},

methods: {
    setCursorPosition(el, pos) {
        el.focus();
        el.setSelectionRange(pos, pos);
    },
    handleChange() {
        // handle backspace event
        if (this.value.length < this.lastValue.length) {
            this.lastValue = this.value;
            this.$emit('input-changed', this.value);
            return;
        }
        // handle value-edit event
        if (this.$refs.input.selectionStart < this.value.length) {
            const startPos = this.$refs.input.selectionStart;
            this.value = this.value.replace(/\W/gi, '').replace(/(.{4})/g, '$1 ').trim();
            this.$nextTick(() => this.setCursorPosition(this.$refs.input, startPos));
            this.lastValue = this.value;
            this.$emit('input-changed', this.value);
            return;
        }
        // handle everything else
        this.value = this.value.replace(/\W/gi, '').replace(/(.{4})/g, '$1 ').trim();
        this.lastValue = this.value;
        this.$emit('input-changed', this.value);
    },
},