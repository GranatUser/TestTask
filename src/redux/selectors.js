import { createSelector } from "@reduxjs/toolkit";

export const selectUsers = state => state.users.users;
export const selectError = state => state.users.error;
export const selectIsLoading = state => state.users.isLoading;
export const selectIndex = state => state.index;

export const selectStatusFilter = state => state.filter.status;



  export const selectVisibleCards = createSelector(
    [selectUsers, selectStatusFilter],
    (users, statusFilter) => {
  
      switch (statusFilter) {
        case 'follow':
          return users.filter(users => !users.status);
        case 'following':
          return users.filter(users => users.status);
        default:
          return users;
      }
    }
  );