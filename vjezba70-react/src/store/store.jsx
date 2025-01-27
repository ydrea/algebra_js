import { action, makeObservable, observable } from "mobx";

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

  constructor() {
    makeObservable(this, {
      userInfo: observable,
      updateUser: action,
      addHobi: action,
    });
  }

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
}

export default UserStore;
