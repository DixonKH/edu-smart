import { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useMemberStore } from "../teachers/model/store";
import { useTranslation } from "react-i18next";
import { MemberUpdate } from "@/shared/types/member";
import { Messages, serverApi } from "@/shared/lib/config";
import { IoMdCloudUpload } from "react-icons/io";
import {
  sweetErrorHandling,
  sweetTopSmallSuccessAlert,
} from "@/shared/lib/sweetAlert";
import { MemberCategory, MemberType } from "@/shared/enums/member.enum";
import { T } from "@/shared/types/common";
import axios from "axios";

type Props = {};

const MyProfile = (props: Props) => {
  const { t } = useTranslation();
  const currentUser = useMemberStore((state) => state.currentMember);
  const updateMember = useMemberStore((state) => state.updateMember);
  const [previewImage, setPreviewImage] = useState("");
  const [memberData, setMemberData] = useState<MemberUpdate>({
    memberNick: currentUser?.memberNick || "",
    memberPhone: currentUser?.memberPhone || "",
    memberAddress: currentUser?.memberAddress || "",
    memberFullName: currentUser?.memberFullName || "",
    memberDesc: currentUser?.memberDesc || "",
    memberExperience: currentUser?.memberExperience || "",
    memberLinks: currentUser?.memberLinks || "",
    memberImage: currentUser?.memberImage || "",
    memberCategory: currentUser?.memberCategory || undefined,
  });

  const isTeacher = currentUser?.memberType === MemberType.TEACHER;

  useEffect(() => {
    if (currentUser) {
      setMemberData({
        memberNick: currentUser.memberNick || "",
        memberPhone: currentUser.memberPhone || "",
        memberAddress: currentUser.memberAddress || "",
        memberFullName: currentUser.memberFullName || "",
        memberDesc: currentUser.memberDesc || "",
        memberExperience: currentUser.memberExperience || "",
        memberLinks: currentUser.memberLinks || "",
        memberImage: currentUser.memberImage || "",
        memberCategory: currentUser.memberCategory || undefined,
      });
    }
  }, [currentUser]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setMemberData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSelectChange = (value: string) => {
    if (Object.values(MemberCategory).includes(value as MemberCategory)) {
      setMemberData((prev) => ({
        ...prev,
        memberCategory: value as MemberCategory, // Cast to the enum type
      }));
    } else {
      console.error("Invalid category value:", value);
    }
  };

  const handleSaveChanges = async () => {
    if (!currentUser) throw new Error(Messages.error2);
    if (
      memberData.memberNick === "" ||
      memberData.memberPhone === "" ||
      memberData.memberAddress === "" ||
      memberData.memberFullName === ""
    ) {
      throw new Error(Messages.error3);
    }
    if (
      isTeacher &&
      (memberData.memberDesc === "" ||
        memberData.memberExperience === "" ||
        memberData.memberLinks === "" ||
        memberData.memberCategory === undefined)
    ) {
      throw new Error(Messages.error4);
    }
    console.log("User for update:", currentUser);
    try {
      await updateMember(currentUser._id, memberData);
      setPreviewImage("");
      console.log("Member data updated:", memberData);
      await sweetTopSmallSuccessAlert("Modified Successfully", 800);
    } catch (error) {
      console.error("Error updating profile:", error);
      sweetErrorHandling(error).then();
    }
  };

  const handleImageChange = async (e: T) => {
    const file = e.target.files?.[0];
    const fileType = file.type,
      validateImageType = ["image/jpg, image/jpeg, image/png"];
    if (validateImageType.includes(fileType)) {
      sweetErrorHandling(new Error(Messages.error5));
    } else {
      if (file) {
        const previewUrl = URL.createObjectURL(file);
        setPreviewImage(previewUrl);
        const formData = new FormData();
        formData.append("memberImage", file);
        try { 
          const storedData: any = localStorage.getItem("member-store");
          const parsedData = JSON.parse(storedData);
            const { accessToken } = parsedData.state;

          const response = await axios.post(`${serverApi}/member/updateMember`, formData, {
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization: `Bearer ${accessToken}`,
            },
          });
          const updateMemberImage = response.data.memberImage;
          setMemberData((prev) => {
            return {
             ...prev,
              memberImage: updateMemberImage,
            };
          });
        } catch (error) {
          console.error("Error uploading image:", error);
          sweetErrorHandling(error).then();
          return;
        }
      }
    }
  };

  return (
    <div className="md:px-10 sm:px-5 px-1 pb-4 rounded-xl h-[810px]">
      <div className="flex justify-center items-center mt-2 p-3">
        <div className="flex flex-col items-center justify-center">
          <div className="flex justify-center items-center rounded-full w-24 h-24 bg-green mb-2">
            {previewImage ? (
              <img
                src={previewImage}
                alt="User Avatar"
                className=" border-2 m-3 border-green rounded-full w-24 h-24"
              />
            ) : currentUser?.memberImage ? (
              <img
                src={`${serverApi}/${currentUser?.memberImage}`}
                alt="User Avatar"
                className=" border-2 m-3 border-green rounded-full w-24 h-24"
              />
            ) : (
              <p className="text-3xl text-white">
                {currentUser?.memberNick[0]}
              </p>
            )}
          </div>
          <p className="flex justify-center text-xs md:text-2xl font-bold">
            {currentUser?.memberNick}
          </p>
          <p className="flex justify-center text-xs md:text-xl">
            {currentUser?.memberType}
          </p>
          <p className="flex justify-center text-xs md:text-lg">
            Phone: {currentUser?.memberPhone}
          </p>
        </div>
        <button onClick={() => document.getElementById("imageInput")?.click()}>
          <IoMdCloudUpload className="text-3xl text-green" />
          <input
            type="file"
            id="imageInput"
            onChange={handleImageChange}
            accept="image/*"
            hidden
          />
        </button>
      </div>
      <div>
        <div className="w-full flex md:flex-row flex-col justify-between ">
          <div className="lg:p-3 p-1 w-full">
            <p className="font-semibold mb-1">Nickname*</p>
            <input
              type="text"
              name="memberNick"
              value={memberData.memberNick}
              onChange={handleChange}
              className="border px-3 py-1 rounded-2xl w-full p-2 h-14 text-lg outline-none"
              placeholder="Sunnatillo"
            />
          </div>
          <div className="lg:p-3 p-1 w-full">
            <p className="font-semibold mb-1">Phone*</p>
            <input
              type="text"
              name="memberPhone"
              value={memberData.memberPhone}
              onChange={handleChange}
              className="border px-3 py-1 rounded-2xl w-full p-2 h-14 text-lg outline-none"
              placeholder="+82101234567"
            />
          </div>
        </div>
        <div className="w-full flex flex-col md:flex-row justify-between ">
          <div className="lg:p-3 p-1 w-full">
            <p className="font-semibold mb-1">Full Name*</p>
            <input
              type="text"
              name="memberFullName"
              value={memberData.memberFullName}
              onChange={handleChange}
              className="border px-3 py-1 rounded-2xl w-full outline-none p-2 h-14 text-lg"
              placeholder="Abduvohidov Abduvohid"
            />
          </div>
          <div className="lg:p-3 p-1 w-full">
            <p className="font-semibold mb-1">Address*</p>
            <input
              type="text"
              name="memberAddress"
              value={memberData.memberAddress}
              onChange={handleChange}
              className="border px-3 py-1 rounded-2xl w-full outline-none p-2 h-14 text-lg"
              placeholder="Seoul, South Korea"
            />
          </div>
        </div>
        {isTeacher && (
          <div className="w-full flex md:flex-row flex-col justify-between">
            <div className="lg:p-3 p-1 w-full md:w-2/6">
              <p className="font-semibold mb-1">Teacher type*</p>
              <Select
                defaultValue={memberData.memberCategory}
                onValueChange={handleSelectChange}
              >
                <SelectTrigger className="w-full h-14 rounded-2xl border">
                  <SelectValue placeholder="ENGLISH" />
                </SelectTrigger>
                <SelectContent>
                  {Object.values(MemberCategory).map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="lg:p-3 p-1 w-full md:w-3/6">
              <p className="font-semibold mb-1">Telegram Link*</p>
              <input
                type="text"
                name="memberLinks"
                value={memberData.memberLinks}
                onChange={handleChange}
                className="border px-3 py-1 rounded-2xl w-full outline-none p-2 h-14 text-lg"
                placeholder="https://www.telegram.com/abduvohidov"
              />
            </div>
            <div className="lg:p-3 p-1 w-full md:w-1/6">
              <p className="font-semibold mb-1">Experience*</p>
              <input
                type="text"
                name="memberExperience"
                value={memberData.memberExperience}
                onChange={handleChange}
                className="border px-3 py-1 rounded-2xl w-full outline-none p-2 h-14 text-lg"
                placeholder="3"
              />
            </div>
          </div>
        )}
        {isTeacher && (
          <div className="lg:p-3 p-1 w-full">
            <p className="font-semibold mb-1">Description*</p>
            <textarea
              name="memberDesc"
              value={memberData.memberDesc}
              onChange={handleChange}
              rows={4}
              placeholder="Write something about yourself"
              className="border p-3 rounded-2xl w-full outline-none text-xl"
            ></textarea>
          </div>
        )}

        <div className="mx-auto text-center flex items-center justify-end m-2 w-full">
          <button
            onClick={handleSaveChanges}
            className="w-48 border bg-green px-2 py-2 flex items-center justify-evenly text-white text-lg rounded-xl mr-4"
          >
            + Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
