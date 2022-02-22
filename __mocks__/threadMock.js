export const threadMock = {
   id: 114,
   title: "123",
   message: "123123123123",
   user_id: 24,
   page_id: 2,
   media: "https://s3-file-uploader-darwin-bucket-dev.s3.us-west-1.amazonaws.com/images/2022-02-11T12%3A51%3A01.299Z.jpeg",
   media_small:
      "https://s3-file-uploader-darwin-bucket-dev.s3.us-west-1.amazonaws.com/images/2022-02-11T12%3A51%3A02.540Z_small.jpeg",
   createdAt: "2022-02-11T12:51:03.906Z",
   updatedAt: "2022-02-11T12:51:03.906Z"
}
const myMock = jest.fn()
export const FormProps = {
   heading: "Create a Thread",
   handleSubmit: myMock,
   title: "/b Random",
   settitle: jest.fn((value) => {}),
   message: "test",
   setmessage: myMock,
   media: "test",
   setmedia: myMock
}
