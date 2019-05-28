export const rowSelection = ($this) => {
    return {
        selectedRowKeys: $this.props.selectedRowKeys,
        onChange: $this.props.select,
        hideDefaultSelections: true,
        selections: [{
            key: 'all-data',
            text: 'Select All Data',
            onSelect: $this.props.select
        }, {
            key: 'odd',
            text: 'Select Odd Row',
            onSelect: $this.props.selectOdd
        }, {
            key: 'even',
            text: 'Select Even Row',
            onSelect: $this.props.selectEven
        }]
    }
};