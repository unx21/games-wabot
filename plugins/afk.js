let handler = async(m, { text }) => {
    if (!isOwner) throw false
    let user = global.db.data.users[m.sender]
    user.afk = +new Date
    user.afkReason = text
    /* m.reply(`
${conn.getName(m.sender)} is now AFK${text ? ': ' + text : ''}
`) */
}
//handler.help = ['oafk [alasan]']
//handler.tags = ['owner']
handler.command = /^oafk$/i
handler.register = true

module.exports = handler
