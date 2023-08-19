const emails = {
  legalEntity: ['lipex360+le1@gmail.com', 'lipex360+le2@gmail.com'],
  witness: 'lipex360+witness@gmail.com',
}

export default {
  entityType: 'supplier',
  action: 'approved',
  payload: {
    author: '1',
    createdAt: '2023-08-17T19:46:00.470Z',
    createdByIp: '::1',
    status: 'WAITING_SIGNERS',
    step: 6,
    updatedAt: '2023-08-17T19:51:58.000Z',
    updatedByIp: null,
    company: {
      cnae: '123',
      corporateName: 'corp name',
      establishment: '1992-02-20T03:00:00.000Z',
      governmentId: 'government_id',
      id: 2,
      tradingName: 'REPRESENTACOES',
    },
    address: {
      city: 'city',
      complement: 'complement',
      country: 'country',
      district: 'district',
      line: 'line',
      number: 'number',
      state: 'state',
      uf: 'uf',
      zipCode: 'zipCode',
    },
    bankAccounts: [
      {
        account: 'account1',
        accountDigit: 'accountDigit1',
        agency: 'agency1',
        alias: null,
        bank: 'bank1',
        bankName: 'bankName1',
        default: true,
      },
      {
        account: 'account2',
        accountDigit: 'accountDigit2',
        agency: 'agency2',
        alias: 'alias2',
        bank: 'bank2',
        bankName: 'bankName2',
        default: false,
      },
    ],
    adhesionTerm: {
      key: null,
      status: 'WAITING',
    },
    documents: {
      socialContract: {
        key: 'socialContractKey',
        name: 'socialContractName',
      },
      legalEntityComprobation: {
        key: 'legalEntityKey',
        name: 'legalEntityName',
      },
      additionalDocuments: [
        {
          name: 'additionalDoc1Name',
          key: 'additionalDoc1Key',
        },
      ],
    },
    legalEntities: [
      {
        name: 'Supplier Legal Entity',
        document: 'document',
        phone: 'phone',
        email: emails.legalEntity[0],
        birthDate: '2000-01-01T02:00:00.000Z',
        role: 'ADMINISTRATOR',
        identityDocument: {
          name: 'name',
          key: 'key',
        },
      },
      // {
      //   name: 'Supplier Legal Entity',
      //   document: 'document',
      //   phone: 'phone',
      //   email: emails.legalEntity[1],
      //   birthDate: '2000-01-01T02:00:00.000Z',
      //   role: 'ADMINISTRATOR',
      //   identityDocument: {
      //     name: 'name',
      //     key: 'key',
      //   },
      // },
    ],
    witness: {
      document: 'document',
      email: emails.witness,
      name: 'Supplier Witness',
    },
  },
}
