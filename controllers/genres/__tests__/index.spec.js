const controller = require('../index')
const Item = require('../../../models/Item');


const mockRequest= () => {
  const req = {}
  req.body = jest.fn().mockReturnValue(req)
  req.params = jest.fn().mockReturnValue(req)
  return req
}

const mockResponse= () => {
  const res = {}
  res.send = jest.fn().mockReturnValue(res)
  res.status = jest.fn().mockReturnValue(res)
  res.json = jest.fn().mockReturnValue(res)
  return res
}

describe('Test Gennres Conntroller', () => {
  beforeAll(() => {
      Item.find = jest.fn().mockResolvedValue([{
              _id: '5dbff32e367a343830cd2f49',
              name: 'Earth',
              description: 'Awesome movie',
              __v: 0
          },
          {
              _id: '5dbff89209dee20b18091ec3',
              name: 'Mars',
              description: 'Epic movie',
              __v: 0
          },
      ]),
      Item.create = jest.fn().mockResolvedValue({
        counnt: 1
      }),

      Item.deleteOne = jest.fn().mockResolvedValue({
        delCount: 1
      })
  });
  const req = mockRequest()
  const res = mockResponse()

  it('Should insert record', async () => {
    req.body = {
      name: 'Earth',
      description: 'Awesome movie'
    }
    await controller.insertGenresRecord(req, res)
    expect(res.status).toHaveBeenCalledWith(200)
  })

  it('should Fetch record', async () => {
    req.params.name = null
    await controller.fetchGenresData(req, res)
    expect(res.status).toHaveBeenCalledWith(200)
  })

  it('should Fetch with parameter record', async () => {
    await controller.fetchGenresData(req, res)
    expect(res.status).toHaveBeenCalledWith(200)
  })

  it('Should delete record', async () => {
    req.params.name = 'age'
    await controller.deleteGenresRecord(req, res)
    expect(res.status).toHaveBeenCalledWith(200)
  })

  it('Should not delete record', async () => {
    req.params = null
    await controller.deleteGenresRecord(req, res)
    expect(res.status).toHaveBeenCalledWith(200)
  })

})