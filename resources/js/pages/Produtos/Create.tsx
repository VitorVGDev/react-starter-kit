import AuthenticatedLayout from '@/layouts/app-layout';
import { PageProps } from '@/types';
import { Head, useForm } from '@inertiajs/react';

export default function Create({ auth }: PageProps) {
    const { data, setData, post, errors } = useForm({
        nome: '',
        descricao: '',
        preco: '',
        data_validade: '',
        ativo: true,
    });

    function submit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        post(route('produtos.store'));
    }

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Novo Produto</h2>}
        >
            <Head title="Novo Produto" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <form onSubmit={submit}>
                                <div className="mb-4">
                                    <label htmlFor="nome" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Nome</label>
                                    <input
                                        id="nome"
                                        type="text"
                                        value={data.nome}
                                        onChange={(e) => setData('nome', e.target.value)}
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                                    />
                                    {errors.nome && <div className="text-red-500 text-xs mt-1">{errors.nome}</div>}
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="descricao" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Descrição</label>
                                    <textarea
                                        id="descricao"
                                        value={data.descricao}
                                        onChange={(e) => setData('descricao', e.target.value)}
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                                    ></textarea>
                                    {errors.descricao && <div className="text-red-500 text-xs mt-1">{errors.descricao}</div>}
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="preco" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Preço</label>
                                    <input
                                        id="preco"
                                        type="number"
                                        value={data.preco}
                                        onChange={(e) => setData('preco', e.target.value)}
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                                    />
                                    {errors.preco && <div className="text-red-500 text-xs mt-1">{errors.preco}</div>}
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="data_validade" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Data de Validade</label>
                                    <input
                                        id="data_validade"
                                        type="date"
                                        value={data.data_validade}
                                        onChange={(e) => setData('data_validade', e.target.value)}
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                                    />
                                    {errors.data_validade && <div className="text-red-500 text-xs mt-1">{errors.data_validade}</div>}
                                </div>

                                <div className="flex items-center mb-4">
                                    <input
                                        id="ativo"
                                        type="checkbox"
                                        checked={data.ativo}
                                        onChange={(e) => setData('ativo', e.target.checked)}
                                        className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                                    />
                                    <label htmlFor="ativo" className="ml-2 block text-sm text-gray-900 dark:text-gray-300">Ativo</label>
                                </div>

                                <div className="flex items-center justify-end">
                                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                        Salvar
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
