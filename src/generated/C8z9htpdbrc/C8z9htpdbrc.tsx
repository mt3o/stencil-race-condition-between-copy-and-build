
  import { Component, Prop, h } from '@stencil/core';

  @Component({
  tag: 'c-8z9htpdbrc',
  shadow: true,
})
export class C8z9htpdbrc {
    @Prop() first: string;
    @Prop() second: string;
    private foo(): string {
      return 'aaa'+this.first+this.second;
    }
    render(){
        return <div>{ this.foo() } </div>;
    }
}
  