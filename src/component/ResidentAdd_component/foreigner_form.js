import * as React from "react";
import { View, Text, TouchableOpacity, Image, TextInput } from "react-native";

import { Styles } from "../../styles";
import * as Global from "../../globalState"

import { useSetRecoilState, useRecoilState } from "recoil";
import * as navigate from "../../navigator/RootNavigation";

export default function thai_form () {

    const setNewResident = useSetRecoilState(Global.dataListResident)

    const [name,setName] = React.useState('')
    const [identity,setIdentity] = React.useState('')
    const [tel,setTel] = React.useState('')
    const [email,setEmail] = React.useState('')

    const addData = () =>
      {
        if (name == '' || identity == '' || tel == '' || email == '')
        {
            console.log("data in" + name + identity + tel + email)
            alert("Please fill all the form")
        }
        else
        {
            setNewResident((oldResident) => [...oldResident,
          {
              name,
              identity,
              tel,
              email,
              type : 'FOREIGN',
              status: "VERIFY",
              image : 'https://scontent.fbkk22-3.fna.fbcdn.net/v/t1.6435-9/100099641_112862920442600_8204332883431653376_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeE3Hhl3oQ_dq3xdTCpsOOzkQ9RGaXRkkCVD1EZpdGSQJe-S1oyZwZg-cIRyc6Xff-oKrY3ucdCEvgad47HOo4B_&_nc_ohc=LC8JEsc2IecAX_npsU7&_nc_ht=scontent.fbkk22-3.fna&oh=00_AT-GLYszm2_g1Zfz8aQVlvGZ9xtVTkjwmDVqYemIiZ1TlQ&oe=61FD2C63'
          }])

          alert("Saved")
        //   setName('')
        //   setIdentity('')
        //   setTel('')
        //   setEmail('')

          navigate.navigate('MemberManage');
        }
      }

      const onChangeName = ({target: {value}}) => {
        setName(value);
      };

      const onChangeIdentity = ({target: {value}}) => {
        setIdentity(value);
      };

      const onChangeTel = ({target: {value}}) => {
        setTel(value);
      };

      const onChangeEmail = ({target: {value}}) => {
        setEmail(value);
      };

        return (
            <View style={{marginBottom: 30}}>
                <Text style={[Styles.ml5,Styles.mt10,Styles.mainFont,Styles.f_16,Styles.black_gray_text]}>ชื่อ-นามสกุล</Text>
                <View style={Styles.al_center}>
                    <TextInput style={[Styles.w90,Styles.mt10,Styles.textfieldbox]} value={name} onChange={onChangeName}></TextInput>
                </View>
                <Text style={[Styles.ml5,Styles.mt10,Styles.mainFont,Styles.f_16,Styles.black_gray_text]}>หมายเลขหนังสือเดินทาง</Text>
                <View style={Styles.al_center}>
                    <TextInput style={[Styles.w90,Styles.mt10,Styles.textfieldbox]} value={identity} onChange={onChangeIdentity}></TextInput>
                </View>
                <Text style={[Styles.ml5,Styles.mt10,Styles.mainFont,Styles.f_16,Styles.black_gray_text]}>เบอร์โทรศัพท์</Text>
                <View style={Styles.al_center}>
                    <TextInput style={[Styles.w90,Styles.mt5,Styles.textfieldbox]} value={tel} onChange={onChangeTel}></TextInput>
                </View>
                <Text style={[Styles.ml5,Styles.mt10,Styles.mainFont,Styles.f_16,Styles.black_gray_text]}>อีเมล์</Text>
                <View style={Styles.al_center}>
                    <TextInput style={[Styles.w90,Styles.mt5,Styles.textfieldbox]} value={email} onChange={onChangeEmail}></TextInput>
                </View>
                <View style={Styles.al_center}>
                <TouchableOpacity style={[
                    Styles.w90,
                    Styles.row,
                    Styles.mt20,
                    Styles.confirm_btn
                ]} 
                // onPress={() => navigate.navigate('ResidentAddOTP')}>
                onPress={() => addData()}>
                    <Text style={[Styles.white_text, Styles.f_18, Styles.mainFont, {marginLeft: '1%'}]}>
                        บันทึก
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={[
                    Styles.w90,
                    Styles.row,
                    Styles.mt10,
                    Styles.transparent,
                    Styles.al_center,
                    Styles.br_5,
                    Styles.border_btn,
                    Styles.p15,
                    Styles.jc_center
                ]} onPress={() => navigate.navigate('MemberManageIndivi')}>
                    <Text style={[Styles.text_center,Styles.mainColor_text, Styles.f_18, Styles.mainFont, {marginLeft: '1%'}]}>
                        ยกเลิก
                    </Text>
                </TouchableOpacity>
                </View>
            </View>
        )
    }

