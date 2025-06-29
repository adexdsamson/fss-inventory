import { NotificationItemProps } from "@/layouts/NotificationPanel";
import { BusinessResponseData } from "@/pages/Business";
import { CustomerOrderType } from "@/pages/CustomerOrder";
import { EmployeeType } from "@/pages/Users";
import { User } from "@/types";
import { faker } from "@faker-js/faker";

export const makeArrayData = <T = unknown>(func: () => T) =>
  faker.helpers.multiple(func, { count: 10 });

export const makeArrayDataWithLength = <T = unknown>(
  func: () => T,
  length: number
) => faker.helpers.multiple(func, { count: length });

export const getLoginInfo = () => {
  return {
    email: faker.internet.email(),
    password: faker.internet.password(),
  };
};

export const getLoginToken = () => {
  return {
    token: faker.string.uuid(),
  };
};

enum BusinessType {
  Wholesale = "Wholesale",
  Retail = "Retail",
}

export const getLoginUser = (): User => {
  return {
    full_name: faker.person.fullName(),
    businessCAC: faker.finance.iban(),
    businessEmail: faker.internet.email(),
    businessName: faker.company.name(),
    country: faker.location.country(),
    email: faker.internet.email(),
    gender: faker.person.sex(),
    id: faker.string.uuid(),
    industry: faker.commerce.department(),
    jobTitle: faker.person.jobTitle(),
    businessAddress: faker.location.streetAddress(),
    businessType: faker.helpers.enumValue(BusinessType),
    dateOfBirth: faker.date.birthdate().toISOString(),
    numberOfEmployees: faker.number.int({ min: 1, max: 100 }).toString(),
    phoneNumber: faker.phone.number(),
    role: "admin",
    zipCode: faker.location.zipCode(),
    is_active: faker.datatype.boolean(),
    last_login: "12/06/1999"
  };
};

// export const getProducts = (numberOfItem: number = 3): ProductData[] =>
//   makeArrayDataWithLength(
//     () => ({

//     }),
//     numberOfItem
//   );

// export const getProductAnalysis = (
//   numberOfItem: number = 3
// ): ProductAnalysisData[] =>
//   makeArrayDataWithLength(
//     () => ({
//       product_id: faker.string.uuid(),
//       product_name: faker.commerce.productName(),
//       profit_earned: faker.commerce.price({ max: 100 }),
//       purchase_price: faker.commerce.price(),
//       quantity_sold: faker.number.int({ min: 1, max: 1000 }),
//       selling_price: faker.commerce.price(),
//       shelf_life: faker.number.int({ min: 1, max: 100 }),
//     }),
//     numberOfItem
//   );

export const getNotificationData = (): NotificationItemProps[] =>
  makeArrayData(() => ({
    description: faker.commerce.productDescription(),
    id: faker.string.uuid(),
    status: faker.helpers.arrayElement([
      "low-in-stock",
      "high-in-stock",
      "completed",
      "ongoing",
      "not-started",
    ]),
    title: faker.commerce.productName(),
    createdAt: faker.date.past().toISOString(),
    iconBgColor: faker.color.rgb(),
    imageSrc: faker.image.urlPicsumPhotos(),
  }));

export const getCustomerOrders = (): CustomerOrderType[] => makeArrayData(() => ({
  amount_spent: faker.commerce.price(),
  purchase_method: faker.finance.transactionType(),
  name: faker.person.fullName(),
}))

export const getEmployees = (): EmployeeType[] => makeArrayData(() => ({
  email: faker.internet.email(),
  employee: faker.person.fullName(),
  role: faker.person.jobTitle(),
  userID: faker.string.uuid(),
}))

export const getDemoBusinesses = (): BusinessResponseData[] => makeArrayData(() => ({
  address: faker.location.streetAddress(),
  business_type: faker.helpers.enumValue(BusinessType),
  cac_number: faker.finance.iban(),
  created_at: faker.date.past().toISOString(),
  email: faker.internet.email(),
  id: faker.string.uuid().split('-')[0],
  industry: faker.commerce.department(),
  is_active: faker.datatype.boolean(),
  name: faker.company.name(),
  phone: faker.phone.number(),
  website: faker.internet.url(),
}))