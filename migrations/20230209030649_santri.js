/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('santri', table => {
        table.string('nis', 8)
        table.string('nama', 64)
        table.enum('jenisKelamin', ['L', 'P'])
        table.string('alamat', 128)
        table.string('nohp', 13)
        table.primary('nis')
    })
};

exports.up = function(knex) {
    return knex.schema.createTable('ust', table => {
        table.string('nip', 8)
        table.string('nama', 64)
        table.enum('jenisKelamin', ['L', 'P'])
        table.string('alamat', 128)
        table.string('nohp', 13)
        table.primary('nip')
    })
};

exports.up = function(knex) {
    return knex.schema.createTable('pelajaran', table => {
        table.string('kodep', 8)
        table.string('namap', 80)
        table.string('kelas', 50)
        table.enum('pelajaran', ['1 jam', '2 jam','3 jam'])
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('santri')
};

exports.down = function(knex) {
    return knex.schema.dropTable('ust')
};