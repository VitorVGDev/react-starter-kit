import AuthenticatedLayout from '@/layouts/authenticated-layout';
import { PageProps } from '@/types';
import { Head } from '@inertiajs/react';

type Produto = {
    id: number;
    nome: string;
    descricao: string;
    preco: number;
    data_validade: string;
    ativo: boolean;
};

type IndexPageProps = PageProps & {
    produtos: Produto[];
};

export default function Index({ auth, produtos }: IndexPageProps) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Produtos</h2>}
        >
            <Head title="Produtos" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <a href={route('produtos.create')} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                Novo Produto
                            </a>

                            <table className="min-w-full divide-y divide-gray-200 mt-4">
                                <thead className="bg-gray-50 dark:bg-gray-700">
                                    <tr>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Nome</th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Preço</th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Ativo</th>
                                        <th scope="col" className="relative px-6 py-3">
                                            <span className="sr-only">Ações</span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200">
                                    {produtos.length > 0 ? (
                                        produtos.map((produto) => (
                                            <tr key={produto.id}>
                                                <td className="px-6 py-4 whitespace-nowrap">{produto.nome}</td>
                                                <td className="px-6 py-4 whitespace-nowrap">{produto.preco}</td>
                                                <td className="px-6 py-4 whitespace-nowrap">{produto.ativo ? 'Sim' : 'Não'}</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                    <a href={route('produtos.show', produto.id)} className="text-indigo-600 hover:text-indigo-900">Ver</a>
                                                    <a href={route('produtos.edit', produto.id)} className="ml-4 text-indigo-600 hover:text-indigo-900">Editar</a>
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan={4} className="px-6 py-4 whitespace-nowrap text-center">Nenhum produto encontrado.</td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
