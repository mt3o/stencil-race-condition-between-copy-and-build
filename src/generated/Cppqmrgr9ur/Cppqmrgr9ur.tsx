
  import { Component, Prop, h } from '@stencil/core';

  @Component({
  tag: 'c-ppqmrgr9ur',
  shadow: true,
})
export class Cppqmrgr9ur {
    @Prop() first: string;
    @Prop() second: string;
    private foo(): string {
      return 'aaa'+this.first+this.second;
    }
    render(){
        return <div>{ this.foo() } </div>;
    }
}
  