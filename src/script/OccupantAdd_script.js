import moment from "moment";
import API from "../graphQL";
import Store from "../store";

export const memberAddProflie_thai = async (add, key, unitid, cb) => {
  Store.getLocalStorege(key, (res) => {
    const token = res.detail.token;
    if (add.files) {
      var ADD = `
                mutation {
                    memberAddProflie(input: {
                        unitId : "${add.unitId}",
                        ownerType: ${add.ownerType},
                        nationType: ${add.nationType},
                        name: "${add.name}",
                        mobileNo: "${add.mobileNo}",
                        email: "${add.email}",
                        idcard: "${add.idcard}",
                        passport: null,
                        expiredDate: "${new Date(add.expiredDate)}",
                        memberImage: {
                            fileId: "${add.files.fileId}"
                            fileCurName: "${add.files.fileCurName}"
                            filePrevName: "${add.files.filePrevName}"
                            fileExtension: "${add.files.fileExtension}"
                        }
                    }){
                        id
                        type
                        sendTo
                        refNo
                    }
                }
            `;
    } else {
      var ADD = `
                mutation {
                    memberAddProflie(input: {
                        unitId : "${add.unitId}",
                        ownerType: ${add.ownerType},
                        nationType: ${add.nationType},
                        name: "${add.name}",
                        mobileNo: "${add.mobileNo}",
                        email: "${add.email}",
                        idcard: "${add.idcard}",
                        passport: null,
                        expiredDate: "${new Date(add.expiredDate)}"
                    }){
                        id
                        type
                        sendTo
                        refNo
                    }
                }
            `;
    }
    updateMember(ADD, token, unitid, cb);
  });
};

export const memberAddProflie_foreign = async (add, key, unitid, cb) => {
  Store.getLocalStorege(key, (res) => {
    const token = res.detail.token;
    if (add.files) {
      var ADD = `
                mutation {
                    memberAddProflie(input: {
                        unitId : "${add.unitId}",
                        ownerType: ${add.ownerType},
                        nationType: ${add.nationType},
                        name: "${add.name}",
                        mobileNo: "${add.mobileNo}",
                        email: "${add.email}",
                        idcard: null,
                        passport: "${add.idcard}",
                        expiredDate: "${new Date(add.expiredDate)}",
                        memberImage: {
                            fileId: "${add.files.fileId}"
                            fileCurName: "${add.files.fileCurName}"
                            filePrevName: "${add.files.filePrevName}"
                            fileExtension: "${add.files.fileExtension}"
                        }
                    }){
                        id
                        type
                        sendTo
                        refNo
                    }
                }
            `;
    } else {
      var ADD = `
                mutation {
                    memberAddProflie(input: {
                        unitId : "${add.unitId}",
                        ownerType: ${add.ownerType},
                        nationType: ${add.nationType},
                        name: "${add.name}",
                        mobileNo: "${add.mobileNo}",
                        email: "${add.email}",
                        idcard: null,
                        passport: "${add.idcard}",
                        expiredDate: "${new Date(add.expiredDate)}"
                    }){
                        id
                        type
                        sendTo
                        refNo
                    }
                }
            `;
    }
    updateMember(ADD, token, unitid, cb);
  });
};

export const memberAddProflie = async (add, key, unitid, cb) => {
  Store.getLocalStorege(key, (res) => {
    const token = res.detail.token;
    if (add.files) {
      if (add.expiredDate !== "") {
        var _ADD_ = `
                mutation {
                    memberAddProflie(input: {
                        unitId : "${add.unitId}",
                        ownerType: ${add.ownerType},
                        nationType: ${add.nationType},
                        name: "${add.name}",
                        mobileNo: "${add.mobileNo}",
                        email: "${add.email}",
                        idcard: "${add.idcard}",
                        passport: "${add.passport}",
                        expiredDate: "${new Date(add.expiredDate)}",
                        memberImage: {
                            fileId: "${add.files.fileId}"
                            fileCurName: "${add.files.fileCurName}"
                            filePrevName: "${add.files.filePrevName}"
                            fileExtension: "${add.files.fileExtension}"
                        }
                    }){
                        id
                        type
                        sendTo
                        refNo
                    }
                }
            `;
      } else {
        var _ADD_ = `
                mutation {
                    memberAddProflie(input: {
                        unitId : "${add.unitId}",
                        ownerType: ${add.ownerType},
                        nationType: ${add.nationType},
                        name: "${add.name}",
                        mobileNo: "${add.mobileNo}",
                        email: "${add.email}",
                        idcard: "${add.idcard}",
                        passport: "${add.passport}",
                        expiredDate: null,
                        memberImage: {
                            fileId: "${add.files.fileId}"
                            fileCurName: "${add.files.fileCurName}"
                            filePrevName: "${add.files.filePrevName}"
                            fileExtension: "${add.files.fileExtension}"
                        }
                    }){
                        id
                        type
                        sendTo
                        refNo
                    }
                }
            `;
      }
    } else {
      if (add.expiredDate !== "") {
        var _ADD_ = `
                    mutation {
                        memberAddProflie(input: {
                            unitId : "${add.unitId}",
                            ownerType: ${add.ownerType},
                            nationType: ${add.nationType},
                            name: "${add.name}",
                            mobileNo: "${add.mobileNo}",
                            email: "${add.email}",
                            idcard: "${add.idcard}",
                            passport: "${add.passport}",
                            expiredDate: "${new Date(add.expiredDate)}"
                        }){
                            id
                            type
                            sendTo
                            refNo
                        }
                    }
                `;
      } else {
        var _ADD_ = `
                    mutation {
                        memberAddProflie(input: {
                            unitId : "${add.unitId}",
                            ownerType: ${add.ownerType},
                            nationType: ${add.nationType},
                            name: "${add.name}",
                            mobileNo: "${add.mobileNo}",
                            email: "${add.email}",
                            idcard: "${add.idcard}",
                            passport: "${add.passport}",
                            expiredDate: null
                        }){
                            id
                            type
                            sendTo
                            refNo
                        }
                    }
                `;
      }
    }
    console.log(_ADD_);
    updateMember(_ADD_, token, unitid, cb);
  });
};

export const updateMember = async (ADD, token, unitid, cb) => {
  const result = await API.request(ADD, token);
  if (typeof result === "object") {
    var otp = result.memberAddProflie;
    updateUnit(token, unitid, otp, cb);
  } else {
    cb(result);
  }
};

export const updateUnit = async (token, unitid, otp, cb) => {
  const UNIT = `query {
    unitMemberAll(unitId: "${unitid}") {
            id,
            unitMemberId,
            name,
            mobileNo,
            email,
            ownerType,
            nationType,
            memberStatus,
            idcard,
            passport,
            expiredDate,
            allowHomecare,
            profileImage
        }
    }`;
  const result = await API.request(UNIT, token);
  const unitMember = result;
  unitMember.unitMemberAll = result.unitMemberAll;
  unitMember.tenant = [];
  unitMember.resident = [];
  for (let i = 0; i < unitMember.unitMemberAll.length; i++) {
    if (unitMember.unitMemberAll[i].ownerType === "tenant") {
      unitMember.unitMemberAll[i].unitid = unitid;
      unitMember.tenant.push(unitMember.unitMemberAll[i]);
    } else {
      unitMember.unitMemberAll[i].unitid = unitid;
      unitMember.resident.push(unitMember.unitMemberAll[i]);
    }
  }
  var respone = {
    unitUpdate: unitMember,
    otp: otp,
  };
  cb(respone);
};

export default {
  memberAddProflie_thai,
  memberAddProflie_foreign,
  memberAddProflie,
};
