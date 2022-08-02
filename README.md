# Project structure

src
|---adapters
|---contexts
|---components
|---styles
|---pages

- Components

Components are the life-blood of your application. They will hold the UI for your application, and can sometimes hold the Business Logic and also any State which has to be maintained.
components
|---page1Components
|--Component1
|--Component2
|---page2Component
|--Component1
|---index.tsx
|---bl.tsx

- Contexts
  contexts folder is a bare minimum folder only containing the state which has to be shared across these components. Each page can have several nested contexts, with each context only passing the data forward in a downward direction. But to avoid complexity, it is best to only have a single context file. This structure will look like this:

  contexts
  |---page1Context
  |--------index.tsx (Exports consumers, providers, ...)
  |--------Context1.tsx (Contains part of the state)
  |--------Context2.tsx (Contains part of the state)
  |---page2Context
  |--------index.tsx (Simple enough to also have state)

  In the above case, since page1 may be a bit more complex, we allow some nested context by passing the child context as a child to the parent.

- Context cung cấp phương pháp truyền data xuyên suốt component tree mà không cần phải truyền props một cách thủ công qua từng level.
- Context được thiết kế để chia sẽ data khi chúng được xem là “global data” của toàn bộ ứng dụng React, chẳng hạn như thông tin về user hiện tại đang đăng nhập, theme, hoặc ngôn ngữ mà người dùng đã chọn.
- Context chủ yếu được sử dụng khi một số data cần được truy cập bởi nhiều components ở nhiều tầng khác nhau.

# What is netlify

netlify help to deploy your project

- Every time we re-push our code on github
  the site will get redeployed and has the latest update

# Web3Auth

# @Walletconnect

# React - moralis

    + easily call functionalities and display database in Moralis
    + just need to provide serverUrl and appId

    * hook privided
        👉useMoralis for authentication and user data
        👉useMoralisQuery for easy query
        👉useMoralisCloudFunction for easy cloud functions
        👉useMoralisSubscription for easy subscription
        👉useMoralisFile for easy file uploads

    In order to start, we need to wrap our _app.js with MoralisProvider then provide our serverUrl and appId

# Magic - SDK

    🔴 Magic Connect
        Magic connect is a fully-featured, global Web3 wallet

    🔴 Magic Auth

# Moment (Moment.js)

# Dice bear avatars

DiceBear is an avatar library for designers and developers. You can choose between simple identicons and lovely designed characters.
