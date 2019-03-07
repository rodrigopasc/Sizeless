'use strict'

const AWS   = require('aws-sdk')
const Sharp = require('sharp')
const S3    = new AWS.S3()
const { basename, extname } = require('path')

module.exports.handle = async ({ Records: records}, context) => {
  try {
    await Promise.all(records.map(async record => {
      const { key } = record.s3.object
      const image = await S3.getObject({
        Bucket: ProcessingInstruction.env.bucket,
        Key: key
      }).promise()

      const optimizedPicture = await Sharp(image.body)
        .resize(1280, 720, { fit: 'inside', withoutEnlargement: true })
        .toFormat('jpeg', { progressive: true, quality: process.env.pictureQualityLevel})
        .toBuffer()

      await S3.putObject({
        Body: optimizedPicture,
        Bucket: process.env.bucket,
        ContentType: 'image/jpeg',
        Key: `sizeless/${basename(key, extname(key))}`
      }).promise()
    }))

    return {
      statusCode: 201,
      body: {}
    }
  } catch (error) {
    return error
  }
}
