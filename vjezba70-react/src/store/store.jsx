import { action, makeObservable, observable, runInAction } from "mobx";

class UserStore {
  userInfo = [
    {
      id: "1",
      ime: "Igor",
      hobiji: ["ribolov", "stolni tenis"],
    },
    {
      id: "2",
      ime: "Jura",
      hobiji: ["nogomet", "rukomet"],
    },
  ];
  editedUserId = null;
  newName = "";
  newHobi = "";

  constructor() {
    makeObservable(this, {
      userInfo: observable,
      editedUserId: observable,
      newName: observable,
      newHobi: observable,
      updateUser: action,
      addHobi: action,
      setEditedUserId: action,
      stopEditing: action,
    });
  }

  runInAction = (fn) => {
    return runInAction(fn);
  };

  updateUser = (userId, newName) => {
    const userToUpdate = this.userInfo.find((user) => user.id === userId);
    if (userToUpdate) {
      userToUpdate.ime = newName;
    }
  };

  addHobi = (userId, newHobi) => {
    const userToUpdate = this.userInfo.find((user) => user.id === userId);
    if (userToUpdate) {
      userToUpdate.hobiji = [];
      userToUpdate.hobiji.push(...newHobi);
    }
  };

  setEditedUserId = (userId) => {
    this.editedUserId = userId;
  };

  stopEditing = () => {
    this.editedUserId = null;
    this.newName = "";
    this.newHobi = "";
  };
}

export default UserStore;
