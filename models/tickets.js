const moment = require('moment')

moment.locale('fr')

exports.detail = data => {
    const lines = []
    data.messages.data.forEach(message => {
        lines.push({
            id: data.id,
            status: data.status,
            created_at: moment(data.created_at).format('L'),
            updated_at: moment(data.updated_at).format('L'),
            order_number: data.order_seller ? data.order_seller.data.reference : '',
            from: message.user.data.roles.data[0].type,
            subject: data.subject,
            message_id: message.id,
            message: message.body,
            message_created_at: moment(message.created_at).format('L'),
            user_id: message.user_id,
            seller: data.seller ? data.seller.data.name : '',
            tags: data.tags.data ? (data.tags.data.map(tag => tag.name)).join(' / ') : ''
        })
    })
    return lines
}

exports.headers = [
    { id: 'id', title: 'ID' },
    { id: 'status', title: 'Statut' },
    { id: 'created_at', title: 'Date de creation' },
    { id: 'updated_at', title: 'Date de modification' },
    { id: 'order_number', title: 'Commande' },
    { id: 'from', title: 'De' },
    { id: 'subject', title: 'Sujet' },
    { id: 'message_id', title: 'ID message' },
    { id: 'message', title: 'Message' },
    { id: 'message_created_at', title: 'Date du message' },
    { id: 'user_id', title: 'User ID' },
    { id: 'seller', title: 'Vendeur' },
    { id: 'tags', title: 'Tags' }
]

exports.filename = 'tickets.csv'

exports.uri = '/v1/tickets?include=messages.user.roles,seller,order_seller,tags'