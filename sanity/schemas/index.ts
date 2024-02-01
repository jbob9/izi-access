// Document types
import account from "./documents/account";
import user from "./documents/user";
import verificationToken from "./documents/verificationToken";
import author from "./documents/author";
import category from "./documents/category";
import blog from "./documents/blog";

const documents = [user, account, verificationToken, blog,author, category];

// // Singleton document types
// import home from "./singletons/home";
// import settings from "./singletons/settings";

const singletons = [];

// Block content
import body from "./blocks/body";


const blocks = [body];

// Object types
// import teamVariant from "./objects/teamVariant";
// import sectionVariant from "./objects/section-variant";
// import featureVariant from "./objects/featureVariant";

const objects = [];

export const schemaTypes = [
  // ...singletons,
  // ...objects,
  ...blocks,
  ...documents,
];
