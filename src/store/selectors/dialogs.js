const selectors = {
    getDialogs: (state) => ({
        dialogs: state.dialogs.items,
        activeDialogId: state.dialogs.activeDialogId,
    }),
};

export default selectors;
