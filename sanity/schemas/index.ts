// Document types
import accompagnement from "./documents/accompagnement";
import account from "./documents/account";
import author from "./documents/author";
import blog from "./documents/blog";
import category from "./documents/category";
import formation from "./documents/formation";
import funding from "./documents/funding";
import user from "./documents/user";
import verificationToken from "./documents/verificationToken";

const documents = [
  user,
  account,
  verificationToken,
  blog,
  author,
  category,
  funding,
  formation,
  accompagnement,
];

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
