import { Company } from '../state/company.state';

export const COMPANY_MOCK: Company = {
  id: '10',
  name: 'Test name of company',
  activated: true,
  plan: '1-year-subscription Premium Packet',
  startDate: new Date(),
  expireDate: new Date(),
  description:
    '   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\n' +
    '          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad\n' +
    '          minim veniam, quis nostrud exercitation ullamco laboris nisi ut\n' +
    '          aliquip ex ea commodo consequat. Duis aute irure dolor in\n' +
    '          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla\n' +
    '          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in\n' +
    '          culpa qui officia deserunt mollit anim id est laborum.',
  logo: null,
};

export const COMPANIES_MOCK: Company[] = [COMPANY_MOCK];
