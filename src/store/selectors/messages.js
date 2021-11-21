const selectors = {
    getMessages: (state) => ({
        items: state.messages.items,
        isLoading: state.messages.isLoading,
        activeDialogId: state.dialogs.activeDialogId,
    }),
};

export default selectors;
